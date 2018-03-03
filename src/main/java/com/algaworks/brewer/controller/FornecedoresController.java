package com.algaworks.brewer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.algaworks.brewer.model.TipoPessoa;

@Controller
@RequestMapping("/fornecedores")
public class FornecedoresController {
	
	@RequestMapping("novo")
	public ModelAndView novo() {
		ModelAndView mv = new ModelAndView("fornecedor/CadastroFornecedor");
		mv.addObject("tiposPessoa", TipoPessoa.values());
		return mv;
	}
	
		
}

