function scheduleHtmlParser(html) {
    $ = cheerio.load(html);
    const cells = $(".ivu-table-cell")
    const sections_ref = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 10],
        [11, 12]
    ]
    let result = []
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        const weekIndex = index % 8
        const rowIndex = (index - weekIndex) / 8;
        const lectures = $(".codedd-wrap",cell)
        for (let cindex = 0; cindex < lectures.length; cindex++) {
            const lecture = lectures[cindex];
            const lines = lecture.children[0].data.split("\n");
            const cname = lines[0]
            const cteacher = lines[1].substring(1, lines[1].length - 1)

            const week_location = lines[2].split("]")
            const weeks = week_location[0].substring(1, week_location[0].length)
            const location = week_location[1].substring(1, week_location[1].length)
            let week_slice = weeks.split(",")
            week_slice[week_slice.length - 1] = week_slice[week_slice.length - 1].substring(0, week_slice[week_slice.length - 1].length - 1)
            let cweeks = []
            for (let ws = 0; ws < week_slice.length; ws++) {
                const wsi = week_slice[ws];
                beg_end = wsi.split("-").map((x) => { return parseInt(x) })
                if (beg_end.length == 1) {
                    cweeks.push(beg_end[0])
                }
                if (beg_end.length == 2) {
                    for (let w = beg_end[0]; w <= beg_end[1]; w++) {
                        cweeks.push(w)
                    }
                }
            }
            const cinfo = {
                name: cname,
                teacher: cteacher,
                day: weekIndex,
                sections: sections_ref[rowIndex],
                position: location,
                weeks: cweeks,
            }
            result.push(cinfo)
        }
    }
    return result
}
