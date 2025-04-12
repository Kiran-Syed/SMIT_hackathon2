
  const menuBtn = document.getElementById('btn');
  const mobileMenu = document.getElementById('mobile');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

    document.getElementById('generate-btn').addEventListener('click', function() {

      // ================= cards bnana ==================

      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const category = document.getElementById('category').value;

      if (title && description && category) {
        const cardsContainer = document.getElementById('cards-container');

        // Create 5 cards
        for (let i = 0; i < 1; i++) {
          const card = document.createElement('div');
          card.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-6', 'relative', 'border',"mt-8");

          // =========== Cards ============ 
          card.innerHTML = `
            <h2 class="text-xl font-semibold mb-2">Title ${title}</h2>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Category:</strong> ${category}</p>
            <button class="absolute top-2 right-2 text-red-500 hover:text-red-700" onclick="deleteCard(this)">
              Delete 
            </button>
          `;

       
          cardsContainer.appendChild(card);
        }

    //    cards generator hai
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
      } else {
        alert("Please fill in all fields before generating cards.");
      }
    });

//    ======= card delete krny k liye ========
    function deleteCard(button) {
      const card = button.closest('div');
      card.remove();
    }

