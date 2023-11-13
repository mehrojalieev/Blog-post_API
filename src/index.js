import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import {AppProvider} from './AppProvider';
const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppProvider>
            <Suspense fallback={<p>Loading...</p>}>
                <App />
            </Suspense>
        </AppProvider>
    </BrowserRouter>
)
