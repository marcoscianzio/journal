import Swal from "sweetalert2";
import { types } from "../components/types/types";

export const setError = (err) => (

    Swal.fire('Error', err, 'error'),

    {
    type: types.uiSetError,
    payload: err
})
export const removeError = () => ({
    type: types.uiRemoveError
})
export const startLoading = () => ({
    type: types.uiStartLoading,
})
export const finishLoading = () => (
    {
    type: types.uiFinishLoading,
})

    