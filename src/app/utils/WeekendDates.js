"use client";

import React, { useState, useEffect } from 'react';

function getNextFridayAndSaturday() {
    const today = new Date();
    const todayDay = today.getDay();

    let friday, saturday;

    if (todayDay === 5) {  // If today is Friday
        friday = today;
        saturday = new Date(today);
        saturday.setDate(today.getDate() + 1);
    } else if (todayDay === 6) {  // If today is Saturday
        friday = new Date(today);
        friday.setDate(today.getDate() - 1);
        saturday = today;
    } else {  // Any other day
        const daysUntilFriday = (5 - todayDay + 7) % 7;
        friday = new Date(today);
        friday.setDate(today.getDate() + daysUntilFriday);
        saturday = new Date(friday);
        saturday.setDate(friday.getDate() + 1);
    }

    return { friday, saturday };
}

export default function WeekendDates() {
    const [friday, setFriday] = useState(null);
    const [saturday, setSaturday] = useState(null);

    useEffect(() => {
        const nextDays = getNextFridayAndSaturday();
        setFriday(nextDays.friday);
        setSaturday(nextDays.saturday);
    }, []);

    if (!friday || !saturday) return null;

    return (
        <strong>Weekend of {friday.toLocaleDateString()} & {saturday.toLocaleDateString()}</strong>
    );
}