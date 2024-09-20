# Obsidian Native Spreadsheets

A native Obsidian spreadsheet editor built on `.csv` files.

## Planned Features

*(checked = complete)*

- [x] follow Obsidian theme styling
- [ ] edit `.csv` files
- [ ] formulas
- [ ] embed sheet or section of sheet in notes
- [ ] embed data from another sheet
- [ ] structured data ([details](#structured-data))
- [ ] notes as rows (database of `.md` notes)
- [ ] insert and edit sheets inline in `.md` notes
- [ ] build sheets from queries

## Structured Data

Enables setting and enforcing a type for each column.

- Supports all Obsidian property types (eg list, number, date)
- Function type supports setting a function for an entire column at once
- Set note type to pull in note using Wikilinks
- Set reference type to pull in properties from note column

## Ideas for the Future

- Separate plugin which generates `.csv` files of calendar events
  - Could then, for example, create an embedded sheet querying today's events in daily note
- Embed views of excel files in notes with link to open in excel
  - Maybe a separate plugin?

