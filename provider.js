async function scheduleHtmlProvider() {
    const dom = document
    table = await dom.getElementsByClassName("course-content-main")[1]
    table = await table.getElementsByClassName("ivu-table-tbody")[0]
    return table.outerHTML
}
