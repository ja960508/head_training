class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data, onModalCancel }) {
    const $imageInfo = document.createElement('div');
    $imageInfo.className = 'ImageInfo';
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
    this.$imageInfo.addEventListener('click', (e) => {
      if (
        e.target === document.querySelector('.ImageInfo') ||
        e.target === document.querySelector('.close')
      ) {
        onModalCancel(this);
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        onModalCancel(this);
      }
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      console.log(this.data);
      const { name, url, temperament, origin } = this.data.image.data;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.classList.add('visible');
    } else {
      this.$imageInfo.classList.remove('visible');
    }
  }
}
