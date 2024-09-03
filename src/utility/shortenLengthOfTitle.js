export const shortenLengthOfTitle = (title) => {
    let stringLength = title.length;
    const expectedLength = 25
    if (stringLength > expectedLength) {
      return title.slice(0, expectedLength) + ('...')
    }else{
      return title
    }
  } 

  export const shortenLengthOfTitleInHomePage = (title) => {
    let stringLength = title.length;
    const expectedLength = 20
    if (stringLength > expectedLength) {
      return title.slice(0, expectedLength) + ('...')
    }else{
      return title
    }
  }