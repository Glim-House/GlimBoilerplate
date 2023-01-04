import {showMessage} from 'react-native-flash-message';
import {Appconfig} from '../../config/config';
import {dummyEndPoint} from '../enums/endpoint';
import {dummy} from '../interface/dummyRequest';
import {request} from '../request/request';

async function placeholder(Args: dummy) {
  const {email, name} = Args;
  try {
    return await request.get(
      `${Appconfig.BASE_URL}${dummyEndPoint.placeholder}`,
    );
  } catch (error) {
    showMessage({
      message: 'Some error message',
      type: 'danger',
    });
    return error;
  }
}

export const dummyRequest = {
  placeholder,
};
