import { eventsApi } from "../../../../redux/slices/eventsSlice";

export const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

export const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

export const removeEvent = async (deleteEvent, id, refetch, setDeleteId, setOpenConfirmationModal, dispatch, changeLoading) => {
  try {
    dispatch(changeLoading({"loading":true}))
    await deleteEvent({id: id})
    dispatch(changeLoading({"loading":false}))
    setDeleteId(null)
    setOpenConfirmationModal(false)
    refetch()
  } catch(error) {
    dispatch(changeLoading({"loading":false}))
     console.log('error: ', error)
  }
}