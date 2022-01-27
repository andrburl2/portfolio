import React, { PureComponent } from 'react';

class DescriptionBlock extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      isBlockVisible: false
    }
  }

  getHeight = () => {
    this.height = document.getElementById(this.props.block.id).offsetTop; // получаем расстояние до верха окна
  }

  makeVisible = () => {
    if (this.height <= this.props.scroll+(window.innerHeight/1.3)) { // если расстояние до верха окна меньше или равно скроллу и высоте окна деленной на множитель
      this.setState({ isBlockVisible: true });                       // то блок становится видимым
    }
  }

  componentDidUpdate() {
    if (this.state.isBlockVisible === false) { // когда меняется пропс скролла
      this.makeVisible();                      // вызывается функция, которая проверяет надо ли показать элемент
    }
  }

  render() {
    const { block } = this.props;
    
    return (
      <div
        id={block.id}
        className={this.state.isBlockVisible ? 'description__block description__block_visible' : 'description__block'}
        onLoad={this.getHeight}
      >
        <p className='description__text'>
          <b>{block.title}</b> {block.text}
        </p>

        <img className='description__img' src={block.img} alt={block.alt} />
      </div>
    )
  }
}

export default DescriptionBlock;