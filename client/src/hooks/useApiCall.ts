import { useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import { SOMETHING_WRONG } from '../constants/Messages';

interface ApiConfigs {
  successMsg?: string;
  errorMsg?: string;
  callBack?: ({
    isError,
    response,
  }: {
    isError: boolean;
    response: Record<string, any>;
  }) => void;
}

type ReturnProps<T> = [
  callApi: (params?: T, configs?: ApiConfigs) => void,
  loading: boolean,
  data: any,
  error: any
];

/**
 * ## UseApiCall - is a custom hook, use this to make HTTP API calls
 * ----
 * ### Returns - [makeCallApiFunction, loadingState, successData, errorData]
 * ----
 * @param apiCallService API call service function, that must be defined in service file
 * @param onSuccess optional callback, called on api success
 * @param onFail optional callback, called on api failure
 */
function UseApiCall<T>(
  apiCallService: CallableFunction,
  onSuccess?: (data: any) => void,
  onFail?: (error: any) => void,
  logData?: { page: string, change_type: string }
): ReturnProps<T> {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const retryCount = useRef(0);
  // const [userData, setUserData] = useRecoilState(userAuthDetails);

  // adding log event to make a api call on logs whenever it receives a logData

  // const logEvent = (changedData: any) => {
  //   if (logData && userData) {
  //     const fullLogData = {
  //       ...logData,
  //       change_data: { type: "raw", change: changedData },
  //       created_by: userData.id,
  //       email: userData.email || ''
  //     }
  //     apiCreateLog(fullLogData)
  //   }
  // }

  /**
   *
   * @param params - directly passed to api service function
   * @param configs - optional configs
   *  - successMsg - optional success message
   *  - errorMsg - optional error message
   *  - hideDefaultError - optional, if true, default error message will not be shown
   *  - callBack - optional, if true, callback will be called on success
   * */
  const callApi = async (params?: T, configs: ApiConfigs = {}) => {
    setLoading(true);
    apiCallService(params || {})
      .then((response: any) => {
        if (configs.successMsg)
          enqueueSnackbar(configs.successMsg, { variant: 'success' });
        setData(response.data);
        if (onSuccess) {
          onSuccess(response.data)
          // logEvent(params)
        };

        if (configs.callBack)
          configs.callBack({ isError: false, response: response.data });
      })
      .catch((err: any) => {
        console.log('<<<<api Err:', err);

        if (configs.callBack)
          configs.callBack({ isError: true, response: err });

        let formatMessage;
        if (Number(err?.status) === 401 && retryCount.current < 2) {
          // onUnauthenticated(params, configs);
        } else {
          if (!err?.options?.hideDefaultError)
            enqueueSnackbar(
              configs.errorMsg ||
              err.options?.errMsg ||
              formatMessage ||
              SOMETHING_WRONG,
              {
                variant: 'error',
              }
            );
          setError(err);
          if (onFail) onFail(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [callApi, loading, data, error];
}

export default UseApiCall;
