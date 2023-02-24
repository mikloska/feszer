export const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

export const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

export const removeEvent = async (deleteEvent, id, refetch) => {
  try {
    await deleteEvent({id: id})
    refetch()
  } catch(error) {
     console.log('error: ', error)
  }
}