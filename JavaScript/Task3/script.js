const Select = document.getElementById('planSelect');
        const button = document.getElementById('button');
        const plan = document.getElementById('plan');
        const price = document.getElementById('price');

        const prices = {
            basic: { monthly: 499, yearly: 4999 },
            pro: { monthly: 999, yearly: 9999 },
            premium: { monthly: 1999, yearly: 19999 }
        };

        let years = false;

        function updateDisplay() {
            const Plan = planSelect.value;
            const Price = years ? prices[Plan].yearly : prices[Plan].monthly;
            plan.textContent = Plan.charAt(0).toUpperCase() + Plan.slice(1);
            price.textContent = `₹${Price}`;
        }
        planSelect.addEventListener('change', updateDisplay);

        button.addEventListener('click', () => {
            years = !years;
            updateDisplay();
        });