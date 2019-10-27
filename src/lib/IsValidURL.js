
const isValidURL = url => {
  try {
    new URL(url)
    return true
  } catch( err ) {
    return false
  }
}

export default isValidURL
  