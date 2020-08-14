import {
  faBold,
  faCode,
  faHeading,
  faItalic,
  faParagraph,
  faQuoteLeft,
  faRedo,
  faRemoveFormat,
  faStrikethrough,
  faSubscript,
  faSuperscript,
  faUnderline,
  faUndo,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Action,
  blockActive,
  isWrapped,
  markActive,
  removeFormatting,
  setListTypeOrWrapInList,
  toggleWrap,
} from '@pompom/core'
import { setBlockType, toggleMark } from 'prosemirror-commands'
import { redo, undo } from 'prosemirror-history'
// import { undoInputRule } from 'prosemirror-inputrules'
import {
  liftListItem,
  sinkListItem,
  splitListItem,
} from 'prosemirror-schema-list'
import React from 'react'

import { schema } from './schema'

export const actions: Record<string, Action> = {
  removeFormatting: {
    id: 'remove-formatting',
    icon: <FontAwesomeIcon icon={faRemoveFormat} />,
    title: 'Remove formatting',
    enable: removeFormatting,
    run: removeFormatting,
  },
  paragraphBlock: {
    id: 'paragraph-block',
    icon: <FontAwesomeIcon icon={faParagraph} />,
    title: 'Change to paragraph',
    active: blockActive(schema.nodes.paragraph),
    enable: setBlockType(schema.nodes.paragraph),
    run: setBlockType(schema.nodes.paragraph),
  },
  headingBlock: {
    id: 'heading-block',
    icon: <FontAwesomeIcon icon={faHeading} />,
    title: 'Change to heading block',
    active: blockActive(schema.nodes.heading),
    enable: setBlockType(schema.nodes.heading),
    run: setBlockType(schema.nodes.heading),
  },
  codeBlock: {
    id: 'code-block',
    icon: <FontAwesomeIcon icon={faCode} />,
    title: 'Change to code block',
    active: blockActive(schema.nodes.codeBlock),
    enable: setBlockType(schema.nodes.codeBlock),
    run: setBlockType(schema.nodes.codeBlock),
  },
  toggleBlockquote: {
    id: 'toggle-blockquote',
    icon: <FontAwesomeIcon icon={faQuoteLeft} />,
    title: 'Toggle block quote wrapper',
    active: isWrapped(schema.nodes.blockquote),
    enable: toggleWrap(schema.nodes.blockquote),
    run: toggleWrap(schema.nodes.blockquote),
  },
  toggleBold: {
    id: 'toggle-bold',
    icon: <FontAwesomeIcon icon={faBold} />,
    title: 'Toggle bold',
    active: markActive(schema.marks.bold),
    enable: toggleMark(schema.marks.bold),
    run: toggleMark(schema.marks.bold),
  },
  toggleItalic: {
    id: 'toggle-italic',
    icon: <FontAwesomeIcon icon={faItalic} />,
    title: 'Toggle italic',
    active: markActive(schema.marks.italic),
    enable: toggleMark(schema.marks.italic),
    run: toggleMark(schema.marks.italic),
  },
  toggleStrikethrough: {
    id: 'toggle-strikethrough',
    icon: <FontAwesomeIcon icon={faStrikethrough} />,
    title: 'Toggle strikethrough',
    active: markActive(schema.marks.strikethrough),
    enable: toggleMark(schema.marks.strikethrough),
    run: toggleMark(schema.marks.strikethrough),
  },
  toggleSubscript: {
    id: 'toggle-subscript',
    icon: <FontAwesomeIcon icon={faSubscript} />,
    title: 'Toggle subscript',
    active: markActive(schema.marks.subscript),
    enable: toggleMark(schema.marks.subscript),
    run: toggleMark(schema.marks.subscript),
  },
  toggleSuperscript: {
    id: 'toggle-superscript',
    icon: <FontAwesomeIcon icon={faSuperscript} />,
    title: 'Toggle superscript',
    active: markActive(schema.marks.superscript),
    enable: toggleMark(schema.marks.superscript),
    run: toggleMark(schema.marks.superscript),
  },
  toggleUnderline: {
    id: 'toggle-underline',
    icon: <FontAwesomeIcon icon={faUnderline} />,
    title: 'Toggle underline',
    active: markActive(schema.marks.underline),
    enable: toggleMark(schema.marks.underline),
    run: toggleMark(schema.marks.underline),
  },
  undo: {
    id: 'undo',
    icon: <FontAwesomeIcon icon={faUndo} />,
    title: 'Undo',
    enable: undo,
    run: undo,
  },
  redo: {
    id: 'redo',
    icon: <FontAwesomeIcon icon={faRedo} />,
    title: 'Redo',
    enable: redo,
    run: redo,
  },
  splitListItem: {
    id: 'split-list-item',
    title: 'Split list item',
    enable: splitListItem(schema.nodes.listItem),
    run: splitListItem(schema.nodes.listItem),
  },
  liftListItem: {
    id: 'lift-list-item',
    title: 'Lift list item',
    enable: liftListItem(schema.nodes.listItem),
    run: liftListItem(schema.nodes.listItem),
  },
  sinkListItem: {
    id: 'sink-list-item',
    title: 'Sink list item',
    // active: blockActive(schema.nodes.list),
    enable: sinkListItem(schema.nodes.listItem),
    run: sinkListItem(schema.nodes.listItem),
  },
  wrapInOrderedList: {
    id: 'wrap-in-ordered-list',
    title: 'Wrap in ordered list',
    active: blockActive(schema.nodes.orderedList),
    enable: setListTypeOrWrapInList(schema.nodes.orderedList),
    run: setListTypeOrWrapInList(schema.nodes.orderedList),
  },
  wrapInBulletList: {
    id: 'wrap-in-bullet-list',
    title: 'Wrap in bullet list',
    active: blockActive(schema.nodes.bulletList),
    enable: setListTypeOrWrapInList(schema.nodes.bulletList),
    run: setListTypeOrWrapInList(schema.nodes.bulletList),
  },
}
