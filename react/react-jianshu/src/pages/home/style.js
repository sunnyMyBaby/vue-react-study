import styled from 'styled-components'

export const HomeWrapper = styled.div`
  // overflow: hidden;
  margin:0 auto;
  width: 960px;
`
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  height: 200px;
  // background: #999;
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
  height: 200px;
  // background: #eee;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem  = styled.div`
  padding-right: 10px;
  line-height: 32px;
  font-size: 14px;
  color: #dcdcdc;
  float: left;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 50px;
    height: 32px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  span{
    float: left;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    float: right;
    width: 70px;
    height: 70px;
    display: block;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size: 13px;
  }
`

export const RecommendWrap = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props)=> props.imgUrl});
  background-size: 100% 100%;
`

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  right: 30px;
  bottom: 30px;
  border-radius: 50%;
  background: red;
  color: #fff;
  cursor: pointer;
`