console.log('app is running!');

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.modeToggler = new ModeToggler({
      $target,
      onChange: () => {
        document.querySelector('body').classList.toggle('dark');
      },
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        console.log(keyword);
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async (image) => {
        const catsProps = await api.fetchCatsProps(image.id);

        this.imageInfo.setState({
          visible: true,
          image: catsProps,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
      onModalCancel: (image) => {
        this.imageInfo.setState({
          visible: false,
          image,
        });
      },
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
