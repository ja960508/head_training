class ModeToggler {
  constructor({ $target, onChange }) {
    this.$modeToggler = document.createElement('input');
    this.$modeTogglerLabel = document.createElement('label');
    this.$modeToggler.type = 'checkbox';
    this.$modeToggler.id = 'modeToggler';
    this.$modeToggler.className = 'modeToggler';
    this.$modeTogglerLabel.htmlFor = this.$modeToggler.id;
    this.$modeTogglerLabel.innerText = '모드 변경';

    $target.appendChild(this.$modeTogglerLabel);
    $target.appendChild(this.$modeToggler);

    this.$modeToggler.addEventListener('change', onChange);
  }
}
