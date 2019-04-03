import '../styles/footer.styl'
export default{
  data(){
    return {
      author: '杨广'
    }
  },
  render (){
    return (
      <div id="footer">
        <span>VUE-SSR by {this.author}</span>
      </div>
    )
  }
}