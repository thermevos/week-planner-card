import { WeekPlannerCard } from './card';
import { version } from '../package.json';

customElements.define(
    'week-planner-card-MMM',
    WeekPlannerCard
);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'week-planner-card-MMM',
    name: 'Week Planner Card',
    description: "Fork of the week-planner-card in an attempt to align it more with MagicMirror's MMM-CalendarExt3 and possibly also introduce an equivalent for MMM-CalendarExt3Timeline."
});

console.info(
    `%c week-planner-card-MMM %c v${version} `,
    'color: white; background: black; font-weight: 700;',
    'color: black; background: white; font-weight: 700;',
);