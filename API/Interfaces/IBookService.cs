﻿using System.Collections.Generic;
using System.Threading.Tasks;
using API.Parser;
using VersOne.Epub;

namespace API.Interfaces
{
    public interface IBookService
    {
        int GetNumberOfPages(string filePath);
        byte[] GetCoverImage(string fileFilePath, bool createThumbnail = true);
        Task<Dictionary<string, int>> CreateKeyToPageMappingAsync(EpubBookRef book);
        /// <summary>
        /// Scopes styles to .reading-section and replaces img src to the passed apiBase
        /// </summary>
        /// <param name="stylesheetHtml"></param>
        /// <param name="apiBase"></param>
        /// <returns></returns>
        Task<string> ScopeStyles(string stylesheetHtml, string apiBase);
        string GetSummaryInfo(string filePath);
        ParserInfo ParseInfo(string filePath);
    }
}