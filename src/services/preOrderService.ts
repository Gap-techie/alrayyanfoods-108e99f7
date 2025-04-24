// services/preOrderService.ts
export interface PreOrderData {
    fullName: string;
    email:    string;
    phone:    string;
    company:  string;
    address:  string;
    riceType: string;
    quantity: string;
    notes:    string;
}

// Replace this URL with your Google Apps Script Web App URL
// It should look something like: https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzOuLcf6-OLR7t59YFbNr_Ge2f8AB3kQ08oqLlxB3ij7gCK6wMZHX53S_cegHAWruc0pA/exec';

export async function postPreOrder(data: PreOrderData): Promise<{ success: boolean; message?: string }> {
    try {
        const formData = new FormData();
        
        // Add all data fields to FormData
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value || '');
        });

        const response = await fetch(SHEET_ENDPOINT, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Required for Google Apps Script
        });

        return { success: true };
    } catch (error) {
        console.error('Form submission error:', error);
        return {
            success: false,
            message: 'Failed to submit form. Please try again later.'
        };
    }
}
  