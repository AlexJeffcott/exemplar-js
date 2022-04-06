import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary, LazyLoader } from '../components';

const LandingPage = lazy(() => import('./landingPage/LandingPage'));

const Router = () => (
	<ErrorBoundary>
		<BrowserRouter>
			<Suspense fallback={<LazyLoader />}>
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	</ErrorBoundary>
);

export { Router };
