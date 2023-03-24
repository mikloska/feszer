export const updatePerson = async (
  id, newData, language, updateAboutMember, setOpen, setNewData, setEdit, refetch, dispatch
) => {
  const data = {
    id : id,
    language: language,
    bio: newData
  }
  try {
    await updateAboutMember(data)
    setNewData('')
    refetch()
  } catch(error) {
    console.log('error: ', error)
  }
  // dispatch(eventsApi.endpoints.getEvents.initiate())
  setEdit(false)
  setOpen(false);
}