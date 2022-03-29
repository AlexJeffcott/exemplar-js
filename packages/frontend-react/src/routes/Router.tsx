import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary, LazyLoader } from '../components';

const LandingPage = lazy(() => import('./landingPage/LandingPage'));
const AnnotationDemoPage = lazy(() => import('./annotationDemoPage/AnnotationDemoPage'));

const Router = () => (
	<ErrorBoundary>
		<BrowserRouter>
			<Suspense fallback={<LazyLoader />}>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/annotate" element={<AnnotationDemoPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	</ErrorBoundary>
);

export { Router };
