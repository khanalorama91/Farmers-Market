package com.farmersMarket.login.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.any;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.farmersMarket.spring.login.controllers.AuthController;
import com.farmersMarket.spring.login.models.ERole;
import com.farmersMarket.spring.login.models.Role;
import com.farmersMarket.spring.login.payload.request.LoginRequest;
import com.farmersMarket.spring.login.payload.request.SignupRequest;
import com.farmersMarket.spring.login.repository.RoleRepository;
import com.farmersMarket.spring.login.repository.UserRepository;
import com.farmersMarket.spring.login.security.jwt.JwtUtils;
import com.farmersMarket.spring.login.security.services.UserDetailsImpl;

import java.util.Collections;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@ExtendWith(SpringExtension.class)
public class AuthControllerTests {

    private MockMvc mockMvc;

    @Mock
    private AuthenticationManager authenticationManager;
    
    @Mock
    private RoleRepository roleRepository;
    
    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder encoder;

    @Mock
    private JwtUtils jwtUtils;

    @Mock
    private Authentication authentication;

    @InjectMocks
    private AuthController authController;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(authController).build();
        ResponseCookie mockCookie = ResponseCookie.from("jwt", "test-token").path("/").maxAge(24 * 60 * 60).httpOnly(true).build();
        when(jwtUtils.generateJwtCookie(any(UserDetailsImpl.class))).thenReturn(mockCookie);

        // Mock UserDetailsImpl
        UserDetailsImpl userDetails = new UserDetailsImpl(1L, "testUser", "testUser@example.com", "testPass", Collections.emptyList());
        when(authentication.getPrincipal()).thenReturn(userDetails);
        when(authenticationManager.authenticate(any())).thenReturn(authentication);
        Role mockRoleUser = new Role(ERole.ROLE_USER);
        Role mockRoleAdmin = new Role(ERole.ROLE_ADMIN);
        Role mockRoleMod = new Role(ERole.ROLE_MODERATOR);

        Mockito.when(roleRepository.findByName(ERole.ROLE_USER)).thenReturn(Optional.of(mockRoleUser));
        Mockito.when(roleRepository.findByName(ERole.ROLE_ADMIN)).thenReturn(Optional.of(mockRoleAdmin));
        Mockito.when(roleRepository.findByName(ERole.ROLE_MODERATOR)).thenReturn(Optional.of(mockRoleMod));

    }

    @Test
    public void authenticateUserTest() throws Exception {
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername("testUser");
        loginRequest.setPassword("testPass");

        mockMvc.perform(post("/api/auth/signin")
                .contentType("application/json")
                .content(new ObjectMapper().writeValueAsString(loginRequest)))
                .andExpect(status().isOk());
    }
    @Test
    public void registerUserTest() throws Exception {
        SignupRequest signUpRequest = new SignupRequest();
        signUpRequest.setUsername("newUser");
        signUpRequest.setEmail("newuser@example.com");
        signUpRequest.setPassword("password");
        Set<String> roles = new HashSet<>();
        roles.add("user");
        signUpRequest.setRole(roles);

        when(userRepository.existsByUsername("newUser")).thenReturn(false);
        when(userRepository.existsByEmail("newuser@example.com")).thenReturn(false);

        mockMvc.perform(post("/api/auth/signup")
                .contentType("application/json")
                .content(new ObjectMapper().writeValueAsString(signUpRequest)))
                .andExpect(status().isOk());
    }
    
    @Test
    public void logoutUserTest() throws Exception {
        ResponseCookie mockCookie = ResponseCookie.from("jwt", "").path("/").maxAge(0).httpOnly(true).build();
        when(jwtUtils.getCleanJwtCookie()).thenReturn(mockCookie);

        mockMvc.perform(post("/api/auth/signout"))
                .andExpect(status().isOk());
    }



}
