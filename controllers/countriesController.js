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
  },

  create(req, res) {
    try {
      if (!countries.includes(req.query.country)){
        countries.push(req.query.country);
        return res.json({
          status: 200,
          addedCountry: countries[countries.length - 1],
          countries: countries 
        })
      } else {
        return res.json({
          status: 409,
          error: 'Duplicate entry'
        })
      }
    } catch (error) {
      return res.json({
        status: 500,
        message: 'Unexpected error. Please try again',
        error
      })
    }
  },
  delete(req, res){
    try {
      const index = countries.indexOf(req.query.country);
      if (index){
        const deleted = countries.splice(index, 1);
        deleted;
        return res.json({
          status: 200,
          message: `You just deleted ${deleted}`
        })
      } else {
        return res.json({
          status: 404,
          message: `${req.query.country} not found`
        })
      }
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