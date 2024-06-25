import { HomeDashboard } from "../pages/HomeDashboard"

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

] as RouteItem[]