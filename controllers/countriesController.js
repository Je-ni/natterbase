const countries = [];

const Country = {
  list(req, res){
    try {
      return res.json({
        status: 200,
        countries
      })
    } catch (error) {
      return res.json({
        status: 500,
        message: 'Unexpected error. Please try again',
        error
      })
    }
  }
}

module.exports = Country;