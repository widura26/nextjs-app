// import React, { useState } from 'react';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title?: string;
//   children?: React.ReactNode;
// }

// const Modals: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
//     if (!isOpen) return null;
//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
//                 {/* Tombol close */}
//                 <button
//                 onClick={() => setModalOpen(true)}
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//                 >
//                 ✕
//                 </button>

//                 {/* Judul */}
//                 {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}

//                 {/* Isi konten modal */}
//                 <div>{children}</div>
//             </div>
//         </div>
//     );
// };

// export default Modals;