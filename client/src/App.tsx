import React, { createRef } from 'react'
import AppRouter from './router/AppRouter'
import { SnackbarProvider } from 'notistack'
import CloseIcon from './assets/icons/close-circle-white.svg'
import { RecoilRoot } from 'recoil'

function App() {
    const notistackRef = createRef<SnackbarProvider>()
    const onClickDismiss = (key: any) => {
        notistackRef?.current?.closeSnackbar(key)
    }
    return (
        <RecoilRoot>
            <SnackbarProvider
                ref={notistackRef}
                action={(key) => (
                    <button
                        className="bg-transparent text-white rounded-full p-2 font-bold hover:bg-bg-black"
                        onClick={() => onClickDismiss(key)}
                    >
                        <img src={CloseIcon} alt="x" width="14" height="14" />
                    </button>
                )}
                maxSnack={3}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <AppRouter />
            </SnackbarProvider>
        </RecoilRoot>
    )
}

export default App
