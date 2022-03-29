import { Fragment, FC } from 'react';
import {annotate} from './annotationForIpsum'
import './AnnotationDemoPage.css';

const txt1 = "Lorem Ipsum"
const txt2 = "&quot;Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...&quot;"
const txt3 = "&quot;There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...&quot;"
const txt4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra auctor ante in vestibulum. Aliquam volutpat varius laoreet. Vestibulum in bibendum mauris, ac dapibus nibh. In at diam purus. Morbi tortor nulla, condimentum ac diam in, faucibus suscipit mi. Proin suscipit tellus eu tincidunt dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi a dignissim lacus, vel varius massa. Pellentesque consectetur malesuada libero, in consequat leo maximus egestas. Aenean elit risus, elementum eget varius eget, efficitur in libero. Sed sollicitudin sem dui, a luctus sapien feugiat ac. In hac habitasse platea dictumst. Donec dignissim egestas tellus, a pulvinar nunc tempor sed. Vivamus ultrices sem eu aliquet elementum. Duis ex dui, ornare at interdum quis, ornare ut urna."
const txt5 = "Nunc sagittis odio LEO, id ultrices nisl interdum eget. Etiam eget orci libero. Pellentesque sed molestie massa. Donec non volutpat enim. Fusce vestibulum, mauris quis sollicitudin finibus, urna ante lobortis risus, sit amet facilisis nibh sapien ut mauris. Nunc sollicitudin dolor sed nisi dignissim, ut porta ante mollis. Ut ac lacus consequat, rhoncus erat vulputate, porttitor neque. Suspendisse potenti. Proin porttitor est sit amet varius consequat. Donec sodales nulla eget rutrum tincidunt. Quisque id lorem sodales ipsum egestas mollis. Aliquam nunc urna, vehicula non faucibus non, finibus sed orci. Nunc metus tellus, finibus nec suscipit at, fermentum id velit. Vivamus nec augue vitae dolor faucibus posuere a quis ante. Phasellus tincidunt ligula vel diam tristique, in condimentum libero rhoncus. Ut at justo non sapien facilisis maximus."
const txt6 = "Donec nulla mauris, sagittis in aliquam dapibus, faucibus quis lacus. Vestibulum iaculis id eros in congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer at ipsum ut felis blandit bibendum ut non orci. Maecenas pretium enim non nunc tincidunt, mollis semper tortor eleifend. Quisque nec tempor ante. Pellentesque quis eleifend risus. Sed laoreet sollicitudin est eu bibendum. Phasellus vitae tincidunt odio. Donec consequat nibh nisl, in cursus sem pulvinar ac. Nulla facilisi. Sed nec dapibus dui. Curabitur venenatis tortor ornare orci laoreet, sit amet tristique ipsum feugiat. Integer libero orci, mollis nec ex in, pellentesque tincidunt sem."
const txt7 = "Vivamus vel turpis sapien. Nunc vel mi ut dolor egestas semper. Phasellus interdum, neque sed bibendum fringilla, metus magna bibendum felis, vitae condimentum leo lacus eu velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla malesuada purus risus, ac tempor ligula faucibus at. Etiam enim quam, molestie a eleifend nec, fringilla sit amet leo. Maecenas a dictum leo, at suscipit nisl."
const txt8 = "Ut a leo vel neque auctor tristique. Sed faucibus magna vel quam tempus tincidunt. Integer rhoncus lorem et pretium maximus. Vivamus vel sollicitudin turpis, quis scelerisque tellus. Fusce pulvinar orci sit amet lorem fringilla, posuere consequat augue sollicitudin. Suspendisse potenti. Fusce mollis diam interdum nunc viverra, eu porta est consequat. Donec posuere eros sit amet libero mattis vestibulum. Praesent ac eros ipsum."

const html1 = {__html: annotate.wrapKwsWithHtml(txt1)}
const html2 = {__html: annotate.wrapKwsWithHtml(txt2)}
const html3 = {__html: annotate.wrapKwsWithHtml(txt3)}
const html4 = {__html: annotate.wrapKwsWithHtml(txt4)}
const html5 = {__html: annotate.wrapKwsWithHtml(txt5)}
const html6 = {__html: annotate.wrapKwsWithHtml(txt6)}
const html7 = {__html: annotate.wrapKwsWithHtml(txt7)}
const html8 = {__html: annotate.wrapKwsWithHtml(txt8)}

const AnnotationDemoPage:FC = () => (
	<div className="content">
		<h1 dangerouslySetInnerHTML={html1}></h1>
		<h4 dangerouslySetInnerHTML={html2}></h4>
		<h5 dangerouslySetInnerHTML={html3}></h5>
		<hr />
		<p dangerouslySetInnerHTML={html4}></p>
		<p dangerouslySetInnerHTML={html5}></p>
		<p dangerouslySetInnerHTML={html6}></p>
		<p dangerouslySetInnerHTML={html7}></p>
		<p dangerouslySetInnerHTML={html8}></p>
	</div>
);

export default AnnotationDemoPage;
