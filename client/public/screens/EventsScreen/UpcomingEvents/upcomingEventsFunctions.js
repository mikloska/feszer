export const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

export const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};