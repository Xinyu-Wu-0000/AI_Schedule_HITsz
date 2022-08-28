async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {
    return {

        forenoon: 4,
        afternoon: 4,
        night: 4,
        sections: [{
            section: 1,
            startTime: '08:30',
            endTime: '9:20',
        }, {
            section: 2,
            startTime: '09:25',
            endTime: '10:15',
        }, {
            section: 3,
            startTime: '10:30',
            endTime: '11:20',
        }, {
            section: 4,
            startTime: '11:25',
            endTime: '12:15',
        }, {
            section: 5,
            startTime: '14:00',
            endTime: '14:50',
        }, {
            section: 6,
            startTime: '14:55',
            endTime: '15:45',
        }, {
            section: 7,
            startTime: '16:00',
            endTime: '16:50',
        }, {
            section: 8,
            startTime: '16:55',
            endTime: '17:45',
        }, {
            section: 9,
            startTime: '18:45',
            endTime: '19:35',
        }, {
            section: 10,
            startTime: '19:40',
            endTime: '20:30',
        }, {
            section: 11,
            startTime: '20:45',
            endTime: '21:35',
        }, {
            section: 12,
            startTime: '21:40',
            endTime: '22:30',
        }]
    }

}
