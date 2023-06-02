import {action_types} from './action_Type';

export const ActionCreator = {
  addProfile: user => ({type: action_types.ADD_USER, payload: {user}}),

  updateProfileImage: (image) => ({ type: action_types.UPDATE_PROFILE_PICTURE, payload: { image } }),

  updateProfile: (user) => ({ type: action_types.UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({ type: action_types.FORM_SUBMITION_STATUS, payload: { status }}),

  login: (user) => ({ type: action_types.LOGIN, payload: { user } })

};
