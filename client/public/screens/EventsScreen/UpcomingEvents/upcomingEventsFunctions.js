import { eventsApi } from "../../../../redux/slices/eventsSlice";

export const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

export const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

export const removeEvent = async (deleteEvent, id, refetch, setDeleteId, setOpenConfirmationModal) => {
  try {
    await deleteEvent({id: id})
    setDeleteId(null)
    setOpenConfirmationModal(false)
    // dispatch(eventsApi.endpoints.getEvents.initiate())
    refetch()
  } catch(error) {
     console.log('error: ', error)
  }
}