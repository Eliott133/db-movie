import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    // Désactiver les boutons si nécessaire
    const isPreviousDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalPages;

    return (
        <div className="flex items-center justify-center gap-4 my-6">

            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={isPreviousDisabled}
                className={`px-4 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-600 
                    ${isPreviousDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
                <ChevronLeft className="w-4 h-4 inline-block" /> Précédent
            </button>

            <span className="text-gray-800 font-medium">
                Page {currentPage} sur {totalPages}
            </span>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={isNextDisabled}
                className={`px-4 py-2 rounded-lg border border-gray-300 shadow-sm text-gray-600 
                    ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >   
                Suivant <ChevronRight className="w-4 h-4 inline-block" />
            </button>
        </div>
    );
}

export default Pagination;
