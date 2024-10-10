document.getElementById('cltvForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from refreshing the page

    // Get form values
    const averageOrderValue = parseFloat(document.getElementById('averageOrderValue').value);
    const purchaseFrequency = parseFloat(document.getElementById('purchaseFrequency').value);
    const customerLifespan = parseFloat(document.getElementById('customerLifespan').value);
    const profitMargin = parseFloat(document.getElementById('profitMargin').value) / 100;

    // Validate inputs
    if (isNaN(averageOrderValue) || isNaN(purchaseFrequency) || isNaN(customerLifespan) || isNaN(profitMargin)) {
        alert("Please fill out all fields with valid numbers.");
        return;
    }

    // CLTV Formula: CLTV = Average Order Value * Purchase Frequency * Customer Lifespan * Profit Margin
    const cltv = averageOrderValue * purchaseFrequency * customerLifespan * profitMargin;

    // Display the result
    document.getElementById('cltvResult').textContent = `$${cltv.toFixed(2)}`;

    // Generate a summary message
    const summaryMessage = `A customer who sticks around for ${customerLifespan} years, making ${purchaseFrequency} purchases per year, is worth approximately $${cltv.toFixed(2)} to your business over their lifetime.`;

    // Insert the summary message into the DOM
    const resultDiv = document.getElementById('result');
    let summaryParagraph = document.getElementById('cltvSummary');
    
    if (!summaryParagraph) {
        summaryParagraph = document.createElement('p');
        summaryParagraph.id = 'cltvSummary';
        summaryParagraph.classList.add('text-center', 'mt-3');
        resultDiv.appendChild(summaryParagraph);
    }
    
    summaryParagraph.textContent = summaryMessage;
});
