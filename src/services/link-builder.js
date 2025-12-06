import { sheet, folders } from '@/stores/gapi';

export const link = (filename) => {
  return `https://script.google.com/macros/s/AKfycbyLwwJiASPr3JzTUQPzKt8GbfQDNMzFDxmKtl0RJIiRS_hGIXEzHPCimOkMslV5zUFYlw/exec?folderId=${folders.pictures}&sheetId${sheet}`;
};
