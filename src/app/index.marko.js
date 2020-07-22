// Compiled using marko@4.22.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/provatrabalho$1.0.0/src/app/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><title>Watson</title><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><meta charset=utf-8><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css integrity=sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk crossorigin=anonymous><script src=https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js></script><script src=https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js integrity=sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo crossorigin=anonymous></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js integrity=sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI crossorigin=anonymous></script><link rel=stylesheet type=text/css href=/estatico/style.css><link href=https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap rel=stylesheet><link href=https://fonts.googleapis.com/css2?family=Fredoka+One&family=Ranchers&display=swap rel=stylesheet><link href=https://fonts.googleapis.com/css2?family=Domine:wght@400;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Staatliches&display=swap rel=stylesheet></head><body class=p-3><div id=total class=\"d-flex flex-column w-100\"><div id=esquerda class=\"w-100 d-flex flex-column align-items-center\"><h3>Comentário</h3><textarea class=w-100 id=novoComentario></textarea><button class=w-100 id=enviar>CADASTRAR</button></div><div id=direita class=\"w-100 d-flex flex-column align-items-around\"><h3 class=text-center>Comentários</h3><div class=conteudo>");

  var $for$0 = 0;

  marko_forOf(data.comentarios, function(comentario) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=\"d-flex w-100 mt-2 justify-content-between individual\"><p class=\"w-75 m-0 frase\"" +
      marko_attr("id", "texto_" + (comentario.id == null ? "" : comentario.id)) +
      ">" +
      marko_escapeXml(comentario.comentario) +
      "</p><button class=ouvir" +
      marko_attr("id", "botao_" + (comentario.id == null ? "" : comentario.id)) +
      ">OUVIR</button></div>");
  });

  out.w("</div></div></div><script src=/estatico/script.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "22");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/provatrabalho$1.0.0/src/app/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
