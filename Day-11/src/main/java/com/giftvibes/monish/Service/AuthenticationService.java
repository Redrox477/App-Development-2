package com.giftvibes.monish.Service;

import java.io.IOException;

import com.giftvibes.monish.dto.request.ForgotPasswordRequest;
import com.giftvibes.monish.dto.request.LoginRequest;
import com.giftvibes.monish.dto.request.RegisterRequest;
import com.giftvibes.monish.dto.response.ForgotPasswordResponse;
import com.giftvibes.monish.dto.response.LoginResponse;
import com.giftvibes.monish.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;

    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);
}