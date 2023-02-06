import  { library } from '@fortawesome/fontawesome-svg-core';

import { 
    faCompass,
    faPaperPlane, 
    faBell, 
    faEnvelope,
    faPlusSquare
} from "@fortawesome/free-regular-svg-icons"

import { faMagnifyingGlass,
         faUserGroup,
         faChartPie,
         faArrowRightFromBracket,
         faLayerGroup,
         faGear,
         faArrowsRotate,
         faTable,
         faPlus,
         faMessage,
         faEllipsis,
         faTableColumns } from "@fortawesome/free-solid-svg-icons"

library.add(
    faMagnifyingGlass,
    faPaperPlane,
    faUserGroup,
    faChartPie,
    faMessage,
    faBell,
    faArrowRightFromBracket,
    faLayerGroup,
    faGear,
    faEnvelope,
    faCompass,
    faTable,
    faEllipsis,
    faTableColumns,
    faPlusSquare,
    faPlus,
    faArrowsRotate
);

export default library;