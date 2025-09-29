import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxe-Q194j2gb4HJ4Boq5xy1drPZ6oqJW5YjwrDNZtaUlYzdinzdmofiwwcofOPSU_Nl/exec",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body),
        }
        );
        const text = await response.text();
        let data;
        try {
        data = JSON.parse(text);
        } catch {
        data = { message: text };
        }

        res.status(200).json(data);
    } catch (err: any) {
        console.error("Error in API handler:", err);
        res.status(500).json({ success: false, error: err.toString() });
    }
}
