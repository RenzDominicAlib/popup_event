
		const button = document.querySelector('button');
		// console.log(button);
		const wrapper = document.querySelector('.wrapper');
		// console.log(wrapper);
		button.addEventListener('click' , function(e){
			// console.log('you clicked me');
			wrapper.style.display = 'block';
		});

		const closeBtn = document.querySelector('.popup-close');
		// console.log(closeBtn);
		closeBtn.addEventListener('click' , function(e){
			wrapper.style.display = 'none';
		});

		wrapper.addEventListener('click' , function(e){
			wrapper.style.display = 'none';
		});
		