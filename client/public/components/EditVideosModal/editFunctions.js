export const updateUrl = async (
  id, newVideo, updateVideo, setNewVideo, refetchVideos, dispatch, changeLoading
) => {
  // const videoUrl = newVideo.includes()
  const data = {
    id : id,
    url: newVideo,
  }

  try {
    dispatch(changeLoading({"loading":true}))
    await updateVideo(data)
    dispatch(changeLoading({"loading":false}))
    setNewVideo('')
    refetchVideos()
  } catch(error) {
    dispatch(changeLoading({"loading":false}))
    console.log('error: ', error)
  }
}