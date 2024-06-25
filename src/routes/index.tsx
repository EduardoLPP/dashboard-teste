import { HomeDashboard } from "../pages/HomeDashboard"
import { NotFound } from "../pages/NotFound"

interface RouteItem {
    title : string,
    path: string,
    getElement: () => JSX.Element
}

interface RouteItem {
    title : string,
    path: string,
    getElement: () => JSX.Element
}

export const RouteList = [
    {
        title: 'HomeDashboard',
        path: '/',
        getElement: () => <HomeDashboard />
    },
    {
        title: 'NotFound',
        path: '/NotFound',
        getElement: () => <NotFound />
    },

] as RouteItem[]