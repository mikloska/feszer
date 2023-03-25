export const updatePerson = async (
  id, newData, language, updateAboutMember, setOpen, setNewData, setEdit, refetch, dispatch, changeLoading
) => {
  const data = {
    id : id,
    language: language,
    bio: newData
  }
  try {
    dispatch(changeLoading({"loading":true}))
    await updateAboutMember(data)
    dispatch(changeLoading({"loading":false}))
    setNewData('')
    refetch()
  } catch(error) {
    dispatch(changeLoading({"loading":false}))
    console.log('error: ', error)
  }
  setEdit(false)
  setOpen(false);
}

export const updateAbout = async (
  newData, language, updateAboutBand, setOpen, setNewData, setEdit, refetch, dispatch, changeLoading
) => {
  const data = {
    language: language,
    updated: newData
  }
  try {
    dispatch(changeLoading({"loading":true}))
    await updateAboutBand(data)
    dispatch(changeLoading({"loading":false}))
    setNewData('')
    refetch()
  } catch(error) {
    dispatch(changeLoading({"loading":false}))
    console.log('error: ', error)
  }
  setEdit(false)
  setOpen(false);
}