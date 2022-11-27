export const getDataFromSnapshot = (data) => {
  return data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}