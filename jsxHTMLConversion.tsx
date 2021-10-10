import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import JsxParser from "react-jsx-parser";

const dialogJSXRegEx = /<span>\s*<CustomDialog\stitle={*"((?:.|\n)*?)"}*\scontent={*"((?:.|\n)*?)"}*\/>\s*<\/span>/gm;
const dialogHTMLRegEx = /<customdialog>\s*<dialogtitle>\s*((?:.|\n)*?)\s*<\/dialogtitle>\s*<dialogcontent>\s*((?:.|\n)*?)\s*<\/dialogcontent>\s*<\/customdialog>/gm;

interface JSXParser {
    parseToHtml: (JSXString: string) => string | undefined;
    parseToJSX: (HTMLString: string) => string | undefined;
}

function CustomDialog({title, content}: { title: string; content: string })  {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}


class CustomDialogParser implements JSXParser {
    private JSXRegEx = dialogJSXRegEx;
    private HTMLRegEx = dialogHTMLRegEx;

    parseToJSX(HTMLString: string) {
        const validHTML = this.validateHTML(HTMLString)
        if(validHTML){
            const props = this.getPropsFromHTML(HTMLString);
            return this.generateJSX(props);
        }
        return '';
    }

    parseToHtml(JSXString: string) {
        const validJSX = this.validateJSX(JSXString);
        if (validJSX) {
            const props = this.getPropsFromJSX(JSXString);
            return this.generateHTML(props)
        }
    }

    validateJSX(JSXString: string) {
        return new RegExp(this.JSXRegEx).test(JSXString);
    }

    validateHTML(HTMLString: string){
        return new RegExp(this.HTMLRegEx).test(HTMLString)
    }

    getPropsFromJSX(JSXString: string): { title: string; content: string } {
        const [, title, content] = new RegExp(dialogJSXRegEx).exec(JSXString)!

        return {
            title,
            content
        }
    }

    getPropsFromHTML(HTMLString:string): { title: string; content: string }{
        const [, title, content] = new RegExp(dialogHTMLRegEx).exec(HTMLString)!
        return {
            title,
            content
        }
    }

    generateHTML({title, content}: { title: string; content: string }): string {
        return `<customdialog>
                <dialogtitle>
                ${title}
                <dialogtitle>
                <dialogcontent>
                ${content}
                <dialogcontent>
                </customdialog>`
    }

    generateJSX({title, content}: {title: string; content: string}){
        return `<CustomDialog title="${title}" content="${content}"/>`
    }
}

const dialogParser = new CustomDialogParser();

const html = dialogParser.parseToHtml(`<span><CustomDialog title="Dialog Title" content="Dialog Content"/></span>`);
const jsx = dialogParser.parseToJSX(`<customdialog>
                <dialogtitle>
                This is a dialog title
                </dialogtitle>
                <dialogcontent>
                This is the dialog content
                </dialogcontent>
                </customdialog>`)