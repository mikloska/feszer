const {executeQuery} = require("../config/executeQuery")

const getAboutMembersController = async (req, res, next) => {
  // try {
    const selectQuery = 
      ` SELECT m.id, m.first_name, m.last_name, ei.instrument_name AS english_instruments, hi.instrument_name AS hungarian_instruments, eb.bio AS english_bio, hb.bio AS hungarian_bio
        FROM musicians AS m
        INNER JOIN english_instruments AS ei
        ON m.english_instrument = ei.id
        INNER JOIN hungarian_instruments AS hi
        ON m.hungarian_instrument = hi.id
        INNER JOIN english_bio AS eb
        ON m.id = eb.member_id
        INNER JOIN hungarian_bio AS hb
        ON m.id = hb.member_id
        ORDER BY rank;
      `
    const queryResult = await executeQuery(selectQuery, next)
    if(queryResult){
      res.json(queryResult.rows)
    } else {
      return next(new Error(`Error in about members controller: ${error.message}`))
    }
    
  // } catch(error) {
  //   return next(new Error(`Error in about members controller: ${error.message}`))
  // }
}

const updateAboutMemberController = async (req, res, next) => {
  const { id, language, bio } = req.body
  const putQuery = 
    `UPDATE ${language}_bio
      SET bio = '${bio}'
      WHERE member_id = ${id};
    `
  await executeQuery(putQuery, res)
  res.json("Successfully updated!")
}

module.exports =  { getAboutMembersController, updateAboutMemberController }